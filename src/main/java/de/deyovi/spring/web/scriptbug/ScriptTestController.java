package de.deyovi.spring.web.scriptbug;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by michi on 23.04.16.
 */
@Controller
public class ScriptTestController {


    @RequestMapping("/hello/plain")
    public @ResponseBody String plainHello() {
        return "<p>Hello Plain</p>";
    }


    @RequestMapping("/hello/dot")
    public String plainHello(Model model) {
        model.addAttribute("content", "Hello Dot!");
        return "test.dot";
    }

}
