<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Kevin G',
            'email' => 'kebin@example.com',
            'password' => bcrypt('password'),
            'rol' => 'admin',
        ]);

        User::create([
            'name' => 'Anddy M',
            'email' => 'andi@example.com',
            'password' => bcrypt('password'),
            'rol' => 'admin',
        ]);
        
        User::create([
            'name' => 'Ella N',
            'email' => 'ela@example.com',
            'password' => bcrypt('password'),
            'rol' => 'admin',
        ]);
    }
}
