<?php

namespace App\Http\Middleware;

use Closure;

class Authkey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->header('APP_KEY');
        if ($token != "O4Z5oXnBtVHExo3esUhgjXOXFTbNj8qzRRNpOIx5hmE=") {
            //ABCDEFGHIJK
            return response()->json("error api",401);
        }
        return $next($request);
    }
}
