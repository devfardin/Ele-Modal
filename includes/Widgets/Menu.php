<?php
namespace Fardin\EleModal\Widgets;

if (!defined("ABSPATH")) {
	exit;
}

use \Elementor\Controls_Manager;
use \Elementor\Widget_Base;

class Menu extends Widget_Base {

	use \Fardin\EleModal\App\Traits\Singletion;

	public function get_name() {
		return 'ele-mobile-menu';
	}

	public function get_title() {
		return esc_html__('Mobile Menu', 'elemodal');
	}

	public function get_icon() {
		return 'eicon-menu-bar';
	}

	public function get_categories() {
		return ['general'];
	}

	public function get_keywords(): array {
		return ['menu', 'navigation', 'nav', 'mobile', 'hamburger'];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_menu',
			[
				'label' => esc_html__('Menu', 'elemodal'),
			]
		);

		$this->add_control(
			'menu',
			[
				'label'   => esc_html__('Select Menu', 'elemodal'),
				'type'    => Controls_Manager::SELECT,
				'options' => $this->get_menus(),
				'default' => '',
			]
		);

		$this->add_control(
			'button_label',
			[
				'label'   => esc_html__('Button Label', 'elemodal'),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__('Menu', 'elemodal'),
			]
		);

		$this->add_control(
			'drawer_title',
			[
				'label'   => esc_html__('Drawer Title', 'elemodal'),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__('Navigation', 'elemodal'),
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if (!$settings['menu']) {
			echo '<p style="color:red;">' . esc_html__('Please select a menu.', 'elemodal') . '</p>';
			return;
		}

		$menu_html = wp_nav_menu([
			'menu'       => (int) $settings['menu'],
			'container'  => false,
			'echo'       => false,
		]);

		$label        = !empty($settings['button_label']) ? esc_html($settings['button_label']) : '';
		$drawer_title = !empty($settings['drawer_title']) ? esc_html($settings['drawer_title']) : '';
		?>
		<div class="ele-menu-wrap">

			<button class="ele-menu-trigger" aria-label="<?php esc_attr_e('Open menu', 'elemodal'); ?>">
				<span class="ele-bars" aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
				</span>
				<?php if ($label) : ?>
					<span class="ele-menu-label"><?php echo $label; ?></span>
				<?php endif; ?>
			</button>

			<div class="ele-nav-overlay"></div>

			<nav class="ele-nav-drawer" aria-label="<?php esc_attr_e('Site navigation', 'elemodal'); ?>">
				<div class="ele-nav-drawer-header">
					<?php if ($drawer_title) : ?>
						<span><?php echo $drawer_title; ?></span>
					<?php endif; ?>
					<button class="ele-nav-close" aria-label="<?php esc_attr_e('Close menu', 'elemodal'); ?>">&#x2715;</button>
				</div>
				<div class="ele-nav-drawer-body">
					<?php echo $menu_html; ?>
				</div>
			</nav>

		</div>
		<?php
	}

	private function get_menus() {
		$menus   = wp_get_nav_menus();
		$options = ['' => esc_html__('— Select —', 'elemodal')];

		foreach ($menus as $menu) {
			$options[$menu->term_id] = $menu->name;
		}

		return $options;
	}
}
