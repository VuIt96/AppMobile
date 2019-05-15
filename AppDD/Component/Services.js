import axios from 'axios';
function getAllStudents() {
    return axios.get('https://backend-students-vudo.herokuapp.com/student').then(res => {
        if (res.data) {
            return res.data;
        }
        else {
            return []
        }
    })
        .catch(error => {
            return []
        });
}
export{getAllStudents}