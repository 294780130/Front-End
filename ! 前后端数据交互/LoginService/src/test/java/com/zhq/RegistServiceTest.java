package com.zhq;

import com.zhq.entity.User;
import com.zhq.service.RegistService;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;


public class RegistServiceTest {

    RegistService registService;
    @Test
    public void registTest() throws IOException {
        registService = new RegistService();
        User user = new User();

        user.setUserName("userr");
        user.setPassword("password");

        boolean truth = registService.regist(user);

        assertEquals(true, truth);
    }
}
