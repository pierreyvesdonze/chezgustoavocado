<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager as PersistenceObjectManager;

class Fixtures extends Fixture
{
    //php bin/console doctrine:fixtures:load --env=test
    public function load(PersistenceObjectManager $manager)
    {
        $article = new Article;
        $article->setTitle('Avocat nature');
        $article->setDescription(('100% naturel !'));
        $article->setPrice(3);

        $manager->persist($article);

        $manager->flush();
    }
}
