<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;
use Illuminate\Support\Fluent;


class backend extends Controller
{

    public function getUserNames(Request $request)
    {

        $users = DB::table('gm_users')
            ->where('deleted',0)
            ->orderBy('uid','asc')
            ->select('uid','EML','TYP')->get();

        return response(['users' =>$users],200);
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
        $users = DB::table('gm_users')->insert([
            ['email' => $request->input("email"), 'uid' => 999],
        ]);

        return response(['users' =>$users],200);
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
        else {
            return json_encode($response);
        }

        $hashOld = DB::table('gm_users')
            ->where('EML', $request->input("email"))
            ->select('HSH')->get();
        $array = json_decode(json_encode($hashOld), True);
        $hashOldString = implode(' ', $array[0]);
        $hashNew = password_hash($request->input("password"), PASSWORD_BCRYPT);

        DB::table('gm_users')->where('HSH',$hashOldString)->update(['HSH'=>$hashNew]);

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

    public function logout(Request $request) {
       $request->session()->flush();
    }


    public function index() {
        echo "data lad";
    }
}
