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

    @GetMapping("login")
    public String login(){ return "login"; }

    @GetMapping("join")
    public String join(){ return "join"; }

    @GetMapping("movie_info")
    public String movie_info(){ return "movie_info"; }

    @GetMapping("search_result")
    public String search_result(){ return "search_result"; }

    @GetMapping("now_playing")
    public String now_playing(){ return "now_playing"; }

    @GetMapping("upcoming")
    public String upcoming(){ return "upcoming"; }

    @GetMapping("rate")
    public String rate(){ return "rate"; }

    @GetMapping("board")
    public String board(){ return "board"; }

//    @GetMapping("/test2")
//    private String getRankData(Model model) {
//        List<MovieRankDto> dtoList = movieService.sortPopularMovie();
//        model.addAttribute("dtolist", dtoList);
//        return "test2";
//    }

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
