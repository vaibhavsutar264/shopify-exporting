<?php

namespace Database\Seeders;

use Admin\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
   /**
    * Run the database seeds.
    *
    * @return void
    */
   public function run()
   {
      $adminUser = [
         'email' => 'admin',
         'username' => 'admin',
         'phone' => '1234567890',
         'password' => bcrypt('secret'),
      ];
      try {
         $admin = User::updateOrCreate([
            'email' => 'admin',
         ], $adminUser);
         $roles = Role::whereIn('code', ['admin', 'root'])->get();
         $admin->roles()->attach($roles);
      } catch (\Throwable $th) {
         throw $th;
      }
   }
}
