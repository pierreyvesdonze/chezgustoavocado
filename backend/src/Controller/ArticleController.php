<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{
    #[Route('/api/articles', name: 'articles')]
    public function index(ArticleRepository $articleRepository): Response
    {
        $articles = $articleRepository->findAll();
        $articlesArr = [];
        
        foreach ($articles as $key => $article) {
            $articlesArr[$key]['id'] = $article->getId();
            $articlesArr[$key]['title'] = $article->getTitle();
            $articlesArr[$key]['description'] = $article->getDescription();
            $articlesArr[$key]['price'] = $article->getPrice();
        }

        $jsonReponse = json_encode($articlesArr);
        
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent($jsonReponse);

        return $response;
    }
}
