<?php

namespace Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
   public function __invoke()
   {
      # code...
   }

   public function index()
   {
      $cards = [];
      $cards[] = [
         'title' => 'Messages',
         'description' => 'All messages from shopify orders',
         'url' => route('admin.messages.index'),
      ];
      return Inertia::render('home', [
         'title' => 'welcome akshay',
         'cards' => $cards
      ]);
   }


}
