<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Song;
use Illuminate\Support\Facades\DB;

class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $mjID = DB::table('albums')->where('name', 'Bad')->value('id');
        Song::create([
            'album_id' => $mjID,
            'name' => 'You are not alone',
            'releaseDate' => '1995',
            'urlSong' => '/storage/songs/Michael Jackson - You Are Not Alone (Official Video).mp3',
            'urlCover' => '/storage/images/You_Are_Not_Alone.jpg'
        ]);

       $twID = DB::table('albums')->where('name', 'After Hours')->value('id');
        Song::create([
            'album_id' => $twID,
            'name' => 'After Hours',
            'releaseDate' => '2020',
            'urlSong' => '/storage/songs/The Weeknd - After Hours (Music Video).mp3',
            'urlCover' => '/storage/images/The_Weeknd.png'
        ]);
        
        $ttID = DB::table('albums')->where('name', 'The Temptations Sing Smokey')->value('id');
        Song::create([    
            'album_id' => $ttID,
            'name' => 'My Girl',
            'releaseDate' => '1965',
            'urlSong' => '/storage/songs/The Temptations - My Girl.mp3',
            'urlCover' => '/storage/images/My-Girl.jpg'
        ]);
     
        $bkID = DB::table('albums')->where('name', 'Dont Play That Song!')->value('id');
        Song::create([
            'album_id' => $bkID,
            'name' => 'Stand By Me',
            'releaseDate' => '1962',
            'urlSong' => '/storage/songs/Ben E. King - Stand By Me (Audio).mp3',
            'urlCover' => '/storage/images/standByMe.jpg'
        ]);

        
        $paID = DB::table('albums')->where('name', 'Natural')->value('id');
        Song::create([
            'album_id' => $paID,
            'name' => 'Mysterious Girl',
            'releaseDate' => '1996',
            'urlSong' => '/storage/songs/Peter Andre - Mysterious Girl (Official Music Video).mp3',
            'urlCover' => '/storage/images/mysteriousGirl.jpg'
        ]);

    
        $agID = DB::table('albums')->where('name', 'Starboy')->value('id');
        Song::create([
            'album_id' => $agID,
            'name' => 'Die For You',
            'releaseDate' => '2023',
            'urlSong' => '/storage/songs/The Weeknd, Ariana Grande - Die For You (Remix Lyric Video).mp3',
            'urlCover' => '/storage/images/die4u.jpg'
        ]);
        
        $pbcID = DB::table('albums')->where('name', 'Playboi Carti')->value('id');
        Song::create([
            'album_id' => $pbcID,
            'name' => 'wokeuplikethis*',
            'releaseDate' => '2017',
            'urlSong' => '/storage/songs/Playboi Carti - wokeuplikethis ft. Lil Uzi Vert (Official Video).mp3',
            'urlCover' => '/storage/images/wokeUpLikeThis.jpg'
        ]);
    }
}
