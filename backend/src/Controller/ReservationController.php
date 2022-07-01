<?php

namespace App\Controller;

use App\Entity\Reservation;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class ReservationController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em)
    {
    }

    /**
     * @Route("/api/reservation/add", name="reservation_add", methods={"GET", "POST"})
     */
    public function addReservation(Request $request): Response
    {
        $requestContent = json_decode($request->getContent(), true);
        
        $newReservation = new Reservation;
        $newReservation->setGuests($requestContent['guests']);
        $newReservation->setUsername($requestContent['Nom']);
        $newReservation->setPhone($requestContent['Téléphone']);
        $newReservation->setDate($requestContent['Pour quand ?']);

        $this->em->persist($newReservation);
        $this->em->flush();
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent('Résa ok');

        return $response;
    }
}
