package com.zhq.controller;

import com.zhq.entity.User;
import com.zhq.service.RegistService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
@RequestMapping(value = "/regist")
public class RegistController {

    @RequestMapping(method = RequestMethod.GET)
    public String registPage() {
        return "/regist";
    }


    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody
    String regist(@RequestParam String username, @RequestParam String password) throws IOException {
        User user = new User(username, password);
        RegistService service = new RegistService();
        boolean truth = service.regist(user);
        System.out.println("+++++++++++++++++++++++++++++++" + truth);
        if (truth == true) {
            return "regist success " + username;
        } else {
            return "regisit false";
        }
    }
}
