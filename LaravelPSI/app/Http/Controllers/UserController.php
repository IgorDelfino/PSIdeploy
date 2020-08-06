<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function returnsTag () {

        $title = "My Favorite Things";
        
        $message = "
        Raindrops on roses
        And whiskers on kittens
        Bright copper kettles and warm woolen mittens
        Brown paper packages tied up with strings
        These are a few of my favorite things
        Cream-colored ponies and crisp apple strudels
        Doorbells and sleigh bells
        And schnitzel with noodles
        Wild geese that fly with the moon on their wings
        These are a few of my favorite things
        Girls in white dresses with blue satin sashes
        Snowflakes that stay on my nose and eyelashes
        Silver-white winters that melt into springs
        These are a few of my favorite things
        When the dog bites
        When the bee stings
        When I'm feeling sad
        I simply remember my favorite things
        And then I don't feel so bad
        ";
        return response()->json(['message' => $message, 'title' => $title], 200);
    }
}
