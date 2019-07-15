<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class backend extends Controller
{

    public function getUserNames(Request $request)
    {
        $users = DB::table('gm_users')
            ->where([
                ['deleted',0],
                ['TYP', '<>', 1]])
            ->orderBy('uid','asc')
            ->select('uid','EML','TYP')->get();

        return response(['users' =>$users],200);
    }

    public function getText(Request $request)
    {
        $text = DB::table('home_texts')
            ->where([
                ['uid',1]])
            ->select('text')->get();

        return response($text,200);
    }

    public function deleteUser(Request $request)
    {

        $email = $request->input("email");
        $users = DB::table('gm_users')
            ->where('EML',$email)->delete();

        return response(['users' =>$users],200);
    }

    public function addUser(Request $request)
    {

        if( $request->input("userType") == 1){
            $response['message'] = "can't create admin user";
            return $response;
        }
        $password = Str::random(8);
        $hashed_password = Hash::make($password);
        $api_key = Str::random(12);

        $users = DB::table('gm_users')->insert([
            ['EML' => $request->input("email"),'HSH' => $hashed_password,'TYP' => $request->input("userType"),"api_key" => $api_key,'creator_uid' => "1"]
        ]);

        return response(['users' =>$users, 'password' =>$password], 200);
    }

    public function isPasswordCorrect(Request $request) {
        $response = ["success" => false];

        $hash = DB::table('gm_users')
            ->where('EML', $request->input("email"))
            ->select('HSH')->get();

        $array = json_decode(json_encode($hash), True);

        $hashstring = implode(' ', $array[0]);

        if (password_verify($request->input("oldPassword"), $hashstring))
        {
            $response['success'] = true;
        }
    }

    public function changePassword(Request $request) {
        $response = [];

        $hash = DB::table('gm_users')
            ->where('EML', $request->input("email"))
            ->select('HSH')->get();

        $array = json_decode(json_encode($hash), True);

        $hashstring = implode(' ', $array[0]);

        if (password_verify($request->input("oldPassword"), $hashstring))
        {
            $response['success'] = true;
        }
        else {
            $response['success'] = false;
            return json_encode($response);
        }

        $hashOld = DB::table('gm_users')
            ->where('EML', $request->input("email"))
            ->select('HSH')->get();
        $array = json_decode(json_encode($hashOld), True);
        $hashOldString = implode(' ', $array[0]);
        $hashNew = password_hash($request->input("password"), PASSWORD_BCRYPT);

        $changed = DB::table('gm_users')->where('HSH',$hashOldString)->update(['HSH'=>$hashNew]);
        $response['pw_updated'] = $changed;

        return json_encode($response);
    }

    public function login(Request $request)
    {
        $response = ["success" => false, "user_data" => ""];

        $user = DB::table('gm_users')
            ->where('EML', $request->input("email"))
            ->select('uid','EML','TYP','creator_uid','data_protection')->get();

        $request->session()->put('user', $user);
        $request->session()->put('email', $request->input("email"));

        $hash = DB::table('gm_users')
            ->where('EML', $request->input("email"))
            ->select('HSH')->get();

        $array = json_decode(json_encode($hash), True);

        $hashstring = implode(' ', $array[0]);

        if (password_verify($request->input("password"), $hashstring))
        {
            $response['success'] = true;
        }
        $response['user_data'] = json_decode(json_encode($user), True);
        echo json_encode($response);

        exit;
    }

    public function updateText(Request $request) {

        $text = $request->input("text");

        DB::table('home_texts')
            ->where('uid', 1)
            ->update(['text' => $text]);

        exit;
    }

    public function logout(Request $request) {
       $request->session()->flush();
    }

}
