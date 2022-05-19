<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
   function __invoke(Request $request, $slug)
   {
      return view()->first([
         "pages/$slug",
         "templates/page",
      ]);
      // dd($slug);
   }
}
