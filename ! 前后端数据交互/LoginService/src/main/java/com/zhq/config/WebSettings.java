package com.zhq.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

//对于AbstractAnnotationConfigDispatcherServletInitializer，我们目前只需要知道所有Spring应用的上下文
//都会基于它来帮助我们配置DispatcherServlet
public class WebSettings extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
//    RootConfig定义
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] {RootConfig.class};
    }

    @Override
//    ServletConfig定义
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] {WebConfig.class};
    }

    @Override
//    全部的"/"请求
    protected String[] getServletMappings() {
        return new String[] {"/"};
    }

}