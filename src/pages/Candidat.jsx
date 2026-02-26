import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import HeroCandidate from '../components/HeroCandidate'
import candidats from '../data/candidats';
import { useState } from 'react';

export function Candidat() {
      const { id } = useParams();
        const candidat = candidats.find(candidat => candidat.rang === Number(id))

  return (
    <div className="bg-white">
        <HeroCandidate rang={id}>
            <div className="relative z-10 lg:pr-8 flex flex-column mobile-align-self-end justify-content-center align-items-center">
            <h1 className="nom-candidat-hero" data-aos="fade-up" data-aos-duration="900">{candidat.prenom}<br></br>{candidat.nom}</h1>
            <h2></h2>
            </div>
        </HeroCandidate>
    </div>
  );
}