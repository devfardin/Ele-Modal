<?php
namespace Fardin\EleModal\Widgets;

if (!defined("ABSPATH")) {
    exit;
}

class Base
{
    use \Fardin\EleModal\App\Traits\Singletion;

    public function init()
    {
        add_action("elementor/widgets/register", [$this, 'new_widget_register']);
        add_action('wp_enqueue_scripts', [$this, 'ele_advance_modal']);

    }
    public function new_widget_register($widgets_manager)
    {
        $widgets_manager->register(Menu::instance());
    }
    public function ele_advance_modal()
    {
        wp_enqueue_style('ele-advance-menu-css', ELE_MODAL_DIR_URL . 'assets/css/menu.css', [], ELE_MODAL_VERSION, 'all');
        wp_enqueue_script('ele-advance-menu-js', ELE_MODAL_DIR_URL . 'assets/js/menu.js', [], ELE_MODAL_VERSION, true);
        
    }
}