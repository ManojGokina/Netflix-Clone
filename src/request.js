const API_KEY= '6d4ccad2db3a1394fd1414d32d6eb6de';


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`

}


export default requests;    