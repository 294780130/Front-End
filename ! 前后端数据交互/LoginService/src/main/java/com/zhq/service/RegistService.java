package com.zhq.service;

import com.zhq.dao.UserDao;
import com.zhq.entity.User;

import java.io.IOException;

public class RegistService {
    private User user;
    public boolean regist(User user) throws IOException {
        boolean truth;
        UserDao dao = new UserDao();
        truth = dao.regist(user.getUserName(), user.getPassword());

        return truth;
    }
}
