import React, {Component} from 'react'

class UserHasFavouriteMovie extends Component{
	render(){
    	return(
        	<p>{this.props.profiles.map((profile) =>(
        		this.props.users[profile.userID].name+ "'s favorite movie is "+
          		this.props.movies[profile.favoriteMovieID].name +". "
        	))}</p> 
			
        )
    }
}

export default UserHasFavouriteMovie