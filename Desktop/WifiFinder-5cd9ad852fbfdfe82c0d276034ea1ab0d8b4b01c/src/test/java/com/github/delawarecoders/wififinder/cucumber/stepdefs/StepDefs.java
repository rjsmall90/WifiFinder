package com.github.delawarecoders.wififinder.cucumber.stepdefs;

import com.github.delawarecoders.wififinder.WififinderApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = WififinderApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
