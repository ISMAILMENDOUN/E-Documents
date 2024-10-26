<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Response;

class TestController extends Controller
{
   public function test(){
      $names = [0 => 'name1', 1 => 'name2'];
      //dd($names);
 
    return Response::json($names);}
   
   }

