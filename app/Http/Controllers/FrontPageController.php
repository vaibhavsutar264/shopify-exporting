<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontPageController extends Controller
{
   function __invoke(Request $request)
   {
      return redirect('/greet');
      return view('welcome');
   }
}
