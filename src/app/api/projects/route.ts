import { NextRequest, NextResponse } from 'next/server';

// Mock data for projects - in a real app, this would come from a database
const mockProjects = [
  {
    id: 1,
    title: "Jalan Tol Jakarta-Cikampek II",
    category: "Tol",
    description: "Pembangunan jalan tol sepanjang 65 km dengan 6 lajur untuk mengurangi kemacetan di area Jabodetabek.",
    client: "Kementerian PUPR",
    location: "Jakarta - Cikampek",
    duration: "2018 - 2021",
    value: "Rp 15 Triliun",
    status: "completed",
    image: "/api/placeholder/400/300",
    features: ["6 Lajur", "Tol Elektronik", "Rest Area", "Jembatan Layang"]
  },
  {
    id: 2,
    title: "Jembatan Suramadu",
    category: "Jembatan",
    description: "Jembatan terpanjang di Indonesia yang menghubungkan Pulau Jawa dan Madura.",
    client: "Pemerintah Provinsi Jatim",
    location: "Surabaya - Madura",
    duration: "2003 - 2009",
    value: "Rp 4.5 Triliun",
    status: "completed",
    image: "/api/placeholder/400/300",
    features: ["5.4 km Panjang", "Cable Stayed", "2 Lajur", "Tol Laut"]
  },
  {
    id: 3,
    title: "Jalan Lintas Sumatera",
    category: "Jalan Nasional",
    description: "Peningkatan jalan nasional sepanjang 2.500 km melintasi Sumatera dari Aceh hingga Lampung.",
    client: "Kementerian PUPR",
    location: "Seluruh Sumatera",
    duration: "2015 - 2023",
    value: "Rp 45 Triliun",
    status: "ongoing",
    image: "/api/placeholder/400/300",
    features: ["2.500 km", "7 Provinsi", "Hotmix Asphalt", "Drainase Sistem"]
  },
  {
    id: 4,
    title: "Jalan Tol Trans Jawa",
    category: "Tol",
    description: "Pembangunan jalan tol sepanjang 1.100 km dari Merak hingga Banyuwangi.",
    client: "PT Jasa Marga",
    location: "Jawa Barat - Jawa Timur",
    duration: "2016 - 2024",
    value: "Rp 120 Triliun",
    status: "ongoing",
    image: "/api/placeholder/400/300",
    features: ["1.100 km", "Connected Network", "Rest Areas", "Electronic Toll"]
  },
  {
    id: 5,
    title: "Jalan Provinsi Bali",
    category: "Jalan Provinsi",
    description: "Peningkatan jalan provinsi di Bali untuk mendukung pariwisata dan ekonomi lokal.",
    client: "Pemerintah Provinsi Bali",
    location: "Seluruh Bali",
    duration: "2019 - 2022",
    value: "Rp 8 Triliun",
    status: "completed",
    image: "/api/placeholder/400/300",
    features: ["Cultural Design", "Landscape Integration", "Tourism Support", "Eco-Friendly"]
  },
  {
    id: 6,
    title: "Jalan Akses Pelabuhan",
    category: "Infrastruktur",
    description: "Pembangunan jalan akses ke pelabuhan-pelabuhan utama di Indonesia untuk mendukung logistik.",
    client: "Pelindo",
    location: "Berbagai Pelabuhan",
    duration: "2020 - 2023",
    value: "Rp 12 Triliun",
    status: "ongoing",
    image: "/api/placeholder/400/300",
    features: ["Heavy Duty", "Port Integration", "Logistics Support", "Multi-Modal"]
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');

    let filteredProjects = mockProjects;

    // Filter by category
    if (category && category !== 'all') {
      filteredProjects = filteredProjects.filter(project => 
        project.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by status
    if (status && status !== 'all') {
      filteredProjects = filteredProjects.filter(project => 
        project.status === status
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      data: paginatedProjects,
      pagination: {
        page,
        limit,
        total: filteredProjects.length,
        totalPages: Math.ceil(filteredProjects.length / limit)
      },
      categories: ['all', 'Tol', 'Jembatan', 'Jalan Nasional', 'Jalan Provinsi', 'Infrastruktur'],
      statuses: ['all', 'completed', 'ongoing']
    });

  } catch (error) {
    console.error('Projects API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, description, client, location, duration, value, status } = body;

    // Validation
    if (!title || !category || !description) {
      return NextResponse.json(
        { error: 'Title, category, and description are required' },
        { status: 400 }
      );
    }

    // In a real app, you would save to database here
    const newProject = {
      id: mockProjects.length + 1,
      title,
      category,
      description,
      client: client || 'Client TBD',
      location: location || 'Location TBD',
      duration: duration || 'Duration TBD',
      value: value || 'Value TBD',
      status: status || 'ongoing',
      image: "/api/placeholder/400/300",
      features: []
    };

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Project created successfully',
      data: newProject
    });

  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}