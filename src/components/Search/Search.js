import React from "react";
import {Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';




function SearchComponent() {
    return ( 
       <div className="form-group-movies">
        <Form>
            <FormGroup>
                <FormLabel></FormLabel>
                <FormControl type="text" placeholder="Enter a title" />
            </FormGroup>
            <Button type="submit"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Button>
        </Form>

        <div className="search-bar-movies">
            <h1>Latest Movies / Series / Animes</h1>
            <img src="https://www.imdb.com/title/tt9764362/mediaviewer/rm1001914881/?ref_=tt_ov_i" alt="imageTest" />


            {/* <h1> Latest Tv-Shows</h1>
            <img src="" alt="" />

            <h1> Latest Anime</h1>
            <img src="" alt="" /> */}
        </div>
      </div>

    
    )
}

export default SearchComponent;
