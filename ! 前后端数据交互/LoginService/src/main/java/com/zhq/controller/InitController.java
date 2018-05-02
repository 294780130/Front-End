package com.zhq.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/")
public class InitController {
    @RequestMapping(method = RequestMethod.GET)
    public String home(){
        return "/index";
    }

    @RequestMapping(method = RequestMethod.POST,value = "/login")
    public @ResponseBody boolean login(@RequestParam("user_name")String user_name, @RequestParam("password")String password, HttpSession session){
        System.out.println(user_name + " " + password);
        if(user_name.equals("admin") && password.equals("123456")){

            return true;
        }
        else return false;
    }
}