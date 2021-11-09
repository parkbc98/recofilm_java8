package com.example.recofilm.controller;

import com.example.recofilm.dto.MovieDto;
import com.example.recofilm.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class IndexController {
    @Autowired
    private MovieService movieService;

    @GetMapping("")
    private String indexPage(Model model) {
        List<MovieDto> popularList = movieService.sortPopularMovie();
        List<MovieDto> upComingList = movieService.sortUpcomingMovie();
        List<MovieDto> topRatedList = movieService.sortTopRatedMovie();
        List<MovieDto> nowPlayingList = movieService.sortNowPlayingMovie();
        model.addAttribute("nowPlayingList", nowPlayingList);
        model.addAttribute("topRatedList", topRatedList);
        model.addAttribute("upComingList", upComingList);
        model.addAttribute("popularList", popularList);
        return "index";
    }
    @GetMapping("recofilm_info")
    public String info() { return "recofilm_info"; }

    @GetMapping("index")
    public String home(){ return "index"; }

    @GetMapping("movie_info")
    public String movie_info(){ return "movie_info"; }

    @GetMapping("search_result")
    public String search_result(){ return "search_result"; }


    @GetMapping("login")
    public String login(){ return "login/login"; }

    @GetMapping("id_find")
    public String id_find(){ return "login/id_find"; }

    @GetMapping("id_find_success")
    public String id_find_success(){ return "login/id_find_success"; }

    @GetMapping("pw_find")
    public String pw_find(){ return "login/pw_find"; }

    @GetMapping("pw_find_success")
    public String pw_find_success(){ return "login/pw_find_success"; }

    @GetMapping("join")
    public String join(){ return "login/join"; }

    @GetMapping("join_success")
    public String join_success(){ return "login/join_success"; }


    @GetMapping("now_playing")
    public String now_playing(){ return "category/now_playing"; }

    @GetMapping("upcoming")
    public String upcoming(){ return "category/upcoming"; }

    @GetMapping("rate")
    public String rate(){ return "category/rate"; }

    @GetMapping("popular")
    public String popular(){ return "category/popular"; }


    @GetMapping("board")
    public String board(){ return "board/board"; }

    @GetMapping("view")
    public String view(){ return "board/view"; }

    @GetMapping("write")
    public String write(){ return "board/write"; }


    @GetMapping("recommend")
    public String recommend(){ return "recommend/recommend"; }

    @GetMapping("recommend_success")
    public String recommend_success(){ return "recommend/recommend_success"; }


    @GetMapping("test")
    public String test1Page() {
        return "test";
    }

    @GetMapping("/test/search")
    private String getSearchData(@RequestParam String keyword, Model model) {
        List<MovieDto> dtoList = movieService.findByMovie(keyword);
        model.addAttribute("dtolist", dtoList);
        return "test";
    }
}
