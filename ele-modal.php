<?php
/**
 * Plugin Name: Ele Modal
 * Description: Ele Modal for Elementor 
 * Plugin URI: https://simple-contact-form-management.com
 * Version: 1.0.0
 * Author: Fardin Ahmed
 * Author URI: https://github.com/devfardin
 * Text Domain: ele-modal
 * Requires Plugins: elementor
 */

namespace Fardin\EleModal;

if (!defined("ABSPATH")) {
    exit;
}

if (!class_exists(EleModal::class) && is_readable(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}
class_exists(EleModal::class) && EleModal::instance()->init();