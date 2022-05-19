<?php

namespace Admin\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
   /**
    * Handle an incoming request.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    * @return mixed
    */
   public function handle(Request $request, Closure $next)
   {
      $user = $request->user();
      if (!$user) {
         return abort(401);
      }
      // dd($user);
      $roles = $user->roles()->pluck('code');
      if ($roles && in_array('admin', $roles->toArray())) {
         return $next($request);
      }
      return abort(401);
   }
}
