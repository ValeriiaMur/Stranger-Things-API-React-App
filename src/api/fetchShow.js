import React, { useState, useEffect } from "react";
import axios from "axios";


export default function fetchShow(){
    return (
         axios
            .get(
              "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
            )
            .then(res => {
                console.log(res)
              return res
            }).catch(err => {
                return err
            })
    )}