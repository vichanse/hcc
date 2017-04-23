<?php
/**
 * Created by PhpStorm.
 * User: vicky.nsenga
 * Date: 11/04/2017
 * Time: 14:24
 */

namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * A car.
 *
 * @ApiResource
 * @ORM\Entity
 */
class Care {

	/**
	 * @var int The id of this book.
	 *
	 * @ORM\Id
	 * @ORM\GeneratedValue
	 * @ORM\Column(type="integer")
	 */
	private $id;


	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="datetime")
	 */
	private $date;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="text")
	 */
	private $intitule;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="text")
	 */
	private $beneficiaire;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="text")
	 */
	private $professionnel;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="text")
	 */
	private $payeur;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="text")
	 */
	private $carteVitale;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="text")
	 */
	private $modePaiement;

	/**
	 * @var string The description of this book.
	 *
	 * @ORM\Column(type="string")
	 */
	private $montant;





    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Care
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set intitule
     *
     * @param string $intitule
     *
     * @return Care
     */
    public function setIntitule($intitule)
    {
        $this->intitule = $intitule;

        return $this;
    }

    /**
     * Get intitule
     *
     * @return string
     */
    public function getIntitule()
    {
        return $this->intitule;
    }

    /**
     * Set beneficiaire
     *
     * @param string $beneficiaire
     *
     * @return Care
     */
    public function setBeneficiaire($beneficiaire)
    {
        $this->beneficiaire = $beneficiaire;

        return $this;
    }

    /**
     * Get beneficiaire
     *
     * @return string
     */
    public function getBeneficiaire()
    {
        return $this->beneficiaire;
    }

    /**
     * Set professionnel
     *
     * @param string $professionnel
     *
     * @return Care
     */
    public function setProfessionnel($professionnel)
    {
        $this->professionnel = $professionnel;

        return $this;
    }

    /**
     * Get professionnel
     *
     * @return string
     */
    public function getProfessionnel()
    {
        return $this->professionnel;
    }

    /**
     * Set payeur
     *
     * @param string $payeur
     *
     * @return Care
     */
    public function setPayeur($payeur)
    {
        $this->payeur = $payeur;

        return $this;
    }

    /**
     * Get payeur
     *
     * @return string
     */
    public function getPayeur()
    {
        return $this->payeur;
    }

    /**
     * Set carteVitale
     *
     * @param string $carteVitale
     *
     * @return Care
     */
    public function setCarteVitale($carteVitale)
    {
        $this->carteVitale = $carteVitale;

        return $this;
    }

    /**
     * Get carteVitale
     *
     * @return string
     */
    public function getCarteVitale()
    {
        return $this->carteVitale;
    }

    /**
     * Set modePaiement
     *
     * @param string $modePaiement
     *
     * @return Care
     */
    public function setModePaiement($modePaiement)
    {
        $this->modePaiement = $modePaiement;

        return $this;
    }

    /**
     * Get modePaiement
     *
     * @return string
     */
    public function getModePaiement()
    {
        return $this->modePaiement;
    }

    /**
     * Set montant
     *
     * @param float $montant
     *
     * @return Care
     */
    public function setMontant($montant)
    {
        $this->montant = $montant;

        return $this;
    }

    /**
     * Get montant
     *
     * @return float
     */
    public function getMontant()
    {
        return $this->montant;
    }
}
