import React from 'react';
import './ProfileName.css'
import profile from './images/photo.png';


class ProfilName extends React.Component {
    render() {

        return (
            <div className='container-About'>
                <h1 className='halo'>Haloo...</h1>
                <span className='name'><span className='saya'>Saya</span> Fahmi Nur Baihaqi</span>
                <p className='About-me' align="justify">Saya orang suka belajar mandiri atau autodidak yang memungkinkan memahami
                    sesuatu terlebih dahulu baru berdiskusi atau bersosialisasi, saya orang yang tenang lebih
                    suka menyimak dan melaksanakan tetapi jika ada perlu bantuan saya mengajarkan dengan bijak serta mampu bekerja dalam tim.
                    Saya sedang berkerja di CV.ENTWO ELECTRONIC AND ENGINERING CILACAP di bidang Front End Developer ReactJS  </p>

                <p className='vacational-Base'>Basik kejuruan di SMK jurusan software angineering, Perkuliahan saya mengambil software angineering dan menyukai desain grafik.  </p>

                <img className='photo' src={profile} />
            </div>
        );
    }
}

export default ProfilName;