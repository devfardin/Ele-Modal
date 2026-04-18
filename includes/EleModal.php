<?php

namespace Fardin\EleModal;

use Elementor\Core\Page_Assets\Loader;

if (!defined('ABSPATH')) {
    exit;
}

class EleModal
{
    use \Fardin\EleModal\App\Traits\Singletion;


    public function init()
    {
        $this->define_constants();
        add_action('plugins_loaded', [$this, 'init_plugin']);
    }

    public function define_constants()
    {
        define('ELE_MODAL_VERSION', '1.0.0');
        define('ELE_ADDONS_PATH', plugin_dir_path(__DIR__));
        define('ELE_MODAL_DIR_URL', plugin_dir_url(dirname(__FILE__) . '/../ele-modal.php'));
        define('ELE_ADDONS_TEXT_DOMAIN', load_plugin_textdomain('ele-addons', false, dirname(plugin_basename(__FILE__)) . '/languages'));
    }

    public function init_plugin()
    {
        $this->includes();
        $this->init_hooks();
    }
    public function includes()
    {
        // App\Widgets\Base::instance()->init();
        Features\Base::instance()->init();
        Widgets\Base::instance()->init();
    }

    public function init_hooks()
    {
        load_plugin_textdomain('ele-addons', false, dirname(plugin_basename(__FILE__)) . '/languages');
    }


}