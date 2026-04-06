<?php
namespace Fardin\EleModal\Features;

if (!defined('ABSPATH')) {
    exit;
}

class Base
{
    use \Fardin\EleModal\App\Traits\Singletion;

    public function init()
    {
        $this->modal_scripts();
    }

    public function modal_scripts()
    {
        add_action("wp_enqueue_scripts", [$this, 'enqueue_scripts']);
    }
    public function enqueue_scripts()
    {
        wp_enqueue_style('modal-css', ELE_MODAL_DIR_URL . 'assets/css/modal.css', array(), ELE_MODAL_VERSION, 'all');

        wp_enqueue_style('modal-general-style', ELE_MODAL_DIR_URL . 'assets/css/modal-general.css', array(), ELE_MODAL_VERSION, 'all');

        // All script here
        wp_enqueue_script('modal-js', ELE_MODAL_DIR_URL . 'assets/js/modal.js', array('jquery'), ELE_MODAL_VERSION, true);
        
        // Stater Plan scritp
        wp_enqueue_script('stain-levels-plan', ELE_MODAL_DIR_URL . 'assets/js/stain-levels.js', array('jquery'), ELE_MODAL_VERSION, true);

        // Most Popular paln script
        // wp_enqueue_script('most-popular', ELE_MODAL_DIR_URL . 'assets/js/most-popular.js', array('jquery'), ELE_MODAL_VERSION, true);
        

        // All Data here
        wp_enqueue_script('modal-data', ELE_MODAL_DIR_URL . 'assets/js/modal-data.js', array('jquery'), ELE_MODAL_VERSION, true);
    }




}