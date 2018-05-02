package com.zhq.dao;

import com.zhq.entity.User;
import org.apache.ibatis.session.SqlSession;

import java.io.IOException;

public class UserDao {
    public boolean regist(String username, String password) throws IOException {
        boolean truth;
        SqlSession sqlSession = new Base().getSqlSession();
        User user = new User(username, password);

        try {
            sqlSession.insert("user.add", user);
        } catch (Exception e) {
            e.printStackTrace();
            return  false;
        }
        finally {
            if (sqlSession != null) {
                sqlSession.commit();
                sqlSession.close();
            }
        }
        return true;
    }
}
