import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SubmitButton, Kontainer, Image, Footer } from '../accountBox/common';
import { BsFillGridFill, BsStopFill } from 'react-icons/bs';
import Logo from '../../assets/logogetor.png';

export default function landingPage() {
	return (
		<Kontainer>
			<div className="col-md-8 mx-auto">
				<Navbar
					collapseOnSelect
					expand="lg"
					bg="light"
					className="bg"
					fixed="top"
					variant="dark"
					style={{ margin: 0, padding: '0 0.5rem', borderRadius: '10px 10px 0 0' }}
				>
					<Navbar.Brand href="#home">
						<Image src={Logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle
						style={{ backgroundColor: 'rgb(21, 89, 190)' }}
						aria-controls="responsive-navbar-nav"
					/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto"></Nav>
						<Nav>
							<Nav.Link className="text-light h5 " href="#deets">
								[Nama Pemilih]
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<div className="mt-4">
					<br />
					<br />
					<h2>
						<strong>Aplikasi Pemilihan Majelis</strong>
					</h2>
				</div>
				<p className="fs-5 col-md-8">
					Selamat datang di website pemilihan Gereja Toraja Jemaat Depok 2021-2024. Ini adalah halaman
					rekomendasi bakal calon. Silahkan memilih <strong>72 Nama</strong> yang anda inginkan calonkan
					sebagai majelis dengan komposisi <strong>42 Penatua</strong> dan <strong>30 Diaken</strong>
				</p>

				<hr className="mb-3" />

				<div className="row">
					<div className="col-md-12">
						<p className="font-weight-bold text-danger">
							<span className="">***</span> Perhatikan gambaran tugas Penatua dan Diaken agar dapat
							mempertimbangkan nama yang akan bapak/ibu, sdra (i) rekomendasikan!
						</p>
					</div>
					{/* Section Penatua */}
					<div className="col-md-6">
						<h5>
							<strong>Gambaran Syarat, Tugas dan Masa Jabatan Penatua</strong>
						</h5>
						<p className="mt-4 mb-2">
							<BsFillGridFill className="mr-2 cl" />
							<strong>Syarat Penatua</strong>
						</p>
						<hr className="mb-1 mt-1 bg" />
						<ul>
							<h6>
								<BsStopFill /> Anggota sidi yang tidak sedang menjalani disiplin gerejawi.
							</h6>
							<h6>
								<BsStopFill /> Mempunyai pengetahuan Alkitab dan dapat mengajarkan dasar-dasar iman
								kristen.
							</h6>
							<h6>
								<BsStopFill /> Mempunyai nama baik di dalam dan di luar jemaat.
							</h6>
							<h6>
								<BsStopFill /> Memahami, menghayati, dan memegang teguh Pengakuan Gereja Toraja dan Tata
								Gereja Toraja.
							</h6>
							<h6>
								<BsStopFill /> Memahami dan bersedia melaksanakan tugas dan fungsi Penatua.
							</h6>
							<h6>
								<BsStopFill /> Mempunyai waktu untuk melayani dan memiliki komitmen pelayanan yang
								sungguh-sungguh.
							</h6>
							<h6>
								<BsStopFill /> Suami dan Istri adalah seiman.
							</h6>
							<h6>
								<BsStopFill /> Telah di teguhkan di tengah-tengah jemaat.
							</h6>
						</ul>

						<p className="mt-3 mb-2">
							<BsFillGridFill className="mr-2" />
							<strong>Tugas Penatua</strong>
						</p>
						<hr className="mb-1 mt-1" />
						<ul>
							<h6>
								<BsStopFill /> Memelihara keutuhan persekutuan dan ketertiban pelayanan dalam jemaat
								melalui pelayanan penggembalaan dan perkunjungan kepada anggota jemaat.
							</h6>
							<h6>
								<BsStopFill /> Bersama-sama dengan Pendeta memperhatikan dan menjaga ajaran yang
								berkembang dalam jemaat, agar sesuai dengan Firman Allah dan Pengakuan Gereja Toraja.
							</h6>
							<h6>
								<BsStopFill /> Bersama-sama dengan Pendeta dan Diaken memelihara, melayani, memimpin,
								dan menjalankan disiplin gerejawi berdasarkan Firman Tuhan.
							</h6>
							<h6>
								<BsStopFill /> Bersama-sama dengan Pendeta dan Diaken bertanggung jawab atas pelayanan
								sakramen.
							</h6>
							<h6>
								<BsStopFill /> Bersama-sama dengan Pendeta dan Diaken melaksanakan katekisasi.
							</h6>
							<h6>
								<BsStopFill /> Memberitakan Injil.
							</h6>
							<h6>
								<BsStopFill /> Menjaga dan memegang teguh rahasia jabatan.
							</h6>
							<h6>
								<BsStopFill /> Mengadakan pertemuan khusus secara periodik untuk membicarakan tugas
								pokok Penatua.
							</h6>
						</ul>
						<p className="mt-3 mb-2">
							<BsFillGridFill className="mr-2" />
							<strong>Masa Tugas Penatua</strong>
						</p>
						<hr className="mb-1 mt-1" />
						<ul className="ml-0">
							<h6>
								<BsStopFill /> Masa Tugas Penatua adalah tiga tahun dan berakhir setelah penggantinya
								diteguhkan. Penatua yang akan berakhir masa tugasnya dapat dicalonkan dan dipilih
								kembali.
							</h6>
							<div>
								<h6>
									<BsStopFill /> Jabatan seorang Penatua ditanggalkan sebelum masa tugasnya berakhir,
									jika :
								</h6>
								<h6 className="ml-4">
									<strong>a.</strong> Pindah menjadi anggota jemaat atau gereja lain.
								</h6>
								<h6 className="ml-4">
									<strong>b.</strong> Tidak mengindahkan disiplin gerejawi.
								</h6>
								<h6 className="ml-4">
									<strong>c.</strong> Mengundurkan diri karena alasan-alasan yang dapat
									dipertanggungjawabkan..
								</h6>
							</div>
							<h6>
								<BsStopFill /> Penanggalan jabatan tersebut diwartakan dalam warta jemaat selama dua
								hari Minggu berturut-turut.
							</h6>
						</ul>
					</div>

					{/* Section Diaken */}
					<div className="col-md-6">
						<h5>
							<strong>Gambaran Syarat, Tugas dan Masa Jabatan Diaken</strong>
						</h5>
						<p className="mt-4 mb-2">
							<BsFillGridFill className="mr-2 cl" />
							<strong>Syarat Diaken</strong>
						</p>
						<hr className="mb-1 mt-1 bg" />
						<ul>
							<h6>
								<BsStopFill /> Anggota sidi yang tidak sedang menjalani disiplin gerejawi.
							</h6>
							<h6>
								<BsStopFill /> Mempunyai pengetahuan Alkitab dan dapat mengajarkan dasar-dasar iman
								kristen.
							</h6>
							<h6>
								<BsStopFill /> Mempunyai nama baik di dalam dan di luar jemaat.
							</h6>
							<h6>
								<BsStopFill /> Memahami, menghayati, dan memegang teguh Pengakuan Gereja Toraja dan Tata
								Gereja Toraja.
							</h6>
							<h6>
								<BsStopFill /> Memahami tugas dan fungsi Diaken.
							</h6>
							<h6>
								<BsStopFill /> Mempunyai waktu untuk melayani dan memiliki komitmen pelayanan yang
								sungguh-sungguh.
							</h6>
							<h6>
								<BsStopFill /> Suami dan Istri adalah seiman.
							</h6>
							<h6>
								<BsStopFill /> Telah di teguhkan di tengah-tengah jemaat.
							</h6>
						</ul>

						<p className="mt-3 mb-2">
							<BsFillGridFill className="mr-2" />
							<strong>Tugas Diaken</strong>
						</p>
						<hr className="mb-1 mt-1" />
						<ul>
							<h6>
								<BsStopFill /> Menyelenggarakan, dengan kasih sayang, pelayanan diakonia agar tercipta
								kesejahteraan anggota-anggota jemaat dan sesama manusia yang berkekurangan.
							</h6>
							<h6>
								<BsStopFill /> Mengusahakan dana dan pekerjaan-pekerjaan diakonia dalam arti yang luas.
							</h6>
							<h6>
								<BsStopFill /> Bersama Pendeta dan Penatua mengunjungi anggota jemaat yang membutuhkan
								pertolongan karena berbagai krisis kehidupan, seperti yang sakit, berduka dan yang
								berkekurangan.
							</h6>
							<h6>
								<BsStopFill /> Bersama-sama dengan Pendeta dan Penatua memelihara, melayani, memimpin,
								dan menjalankan disiplin gerejawi berdasarkan firman Tuhan.
							</h6>
							<h6>
								<BsStopFill /> Bersama-sama dengan Pendeta dan Penatua melaksanakan katekisasi.
							</h6>
							<h6>
								<BsStopFill /> Memberitakan Injil.
							</h6>
							<h6>
								<BsStopFill /> Menjaga dan memegang teguh rahasia jabatan.
							</h6>
							<h6>
								<BsStopFill /> Mengadakan pertemuan khusus secara periodik untuk membicarakan tugas
								pokok Diaken.
							</h6>
						</ul>
						<p className="mt-3 mb-2">
							<BsFillGridFill className="mr-2" />
							<strong>Masa Tugas Diaken</strong>
						</p>
						<hr className="mb-1 mt-1" />
						<ul className="ml-0">
							<h6>
								<BsStopFill /> Masa tugas Diaken adalah tiga tahun dan berakhir setelah penggantinya
								diteguhkan. Diaken yang akan berakhir ,masa tugasnya dapat dicalonkan dan dipilih
								kembali.
							</h6>
							<div>
								<h6>
									<BsStopFill /> Jabatan seorang Diaken dapat ditanggalkan sebelum masa tugasnya
									berakhir jika :
								</h6>
								<h6 className="ml-4">
									<strong>a.</strong> Pindah menjadi anggota jemaat atau gereja lain.
								</h6>
								<h6 className="ml-4">
									<strong>b.</strong> Tidak mengindahkan disiplin gerejawi.
								</h6>
								<h6 className="ml-4">
									<strong>c.</strong> Mengundurkan diri karena alasan-alasan yang dapat
									dipertanggungjawabkan..
								</h6>
							</div>
							<h6>
								<BsStopFill /> Penanggalan jabatan tersebut diwartakan dalam warta jemaat selama dua
								hari Minggu berturut-turut.
							</h6>
						</ul>
					</div>
				</div>
				<hr className="mb-1 mt-1" />
				<div className="row">
					<div className="col-md-12">
						<p className="font-weight-bold text-danger">
							<span className="">***</span> Silahkan mendoakan terlebih dahulu nama yang anda
							rekomendasikan menjadi calon Penatua dan Diaken periode 2021-2024. Harap menggumulkan calon
							majelis yang anda pilih dengan sungguh-sungguh, tanpa tendensi atau faktor lain yang melawan
							hati nurani bapak/ibu atau kebenaran Firman Tuhan!
						</p>
						<p>
							Jika bapak/ibu sudah mendoakan, silahkan klik lanjutkan ke halaman berikut untuk memilih
							nama bakal calon Majelis (Penatua dan Diaken)
						</p>
					</div>
					<div className="col-6 col-md-2 mx-auto">
						<SubmitButton className="">Lanjutkan</SubmitButton>
					</div>
				</div>
			</div>
			<Footer>
				<p>salekoDe@2021</p>
			</Footer>
		</Kontainer>
	);
}
