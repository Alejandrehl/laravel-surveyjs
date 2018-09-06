<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function axios(Request $request){
        $input = $request->input();
        if($input->final_result > 11){
           $message = "asdsadsad";
           send::Mail("asdasdsa", $teacher_email);
        }
    }
}
