import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../../lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  const destaque = posts[0];
  const recentes = posts.slice(1);

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />

        <div className="blog-hero-content">
          <span className="blog-label">BLOG DO CLINTIN DOS SITES</span>

          <h1 className="title-purple">
            Fique por dentro de informações atualizadas sobre o mundo da
            tecnologia da informação
          </h1>

          <p>
            Fique por dentro das melhores dicas, tutoriais, cursos, produtos e
            conteúdos da tecnologia da informação.
          </p>

          <div className="blog-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="O que você quer aprender?"
              aria-label="Pesquisar no blog"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="blog-categories">
        <div className="blog-container">
          <div className="categories-header">
            <span>EXPLORE O CONTEÚDO</span>
            <h2>Encontre o que você precisa</h2>
          </div>

          <div className="categories-list">
            <Link href="/blog">Todos</Link>
            <Link href="/blog?categoria=dicas">Dicas</Link>
            <Link href="/blog?categoria=cursos">Cursos</Link>
            <Link href="/blog?categoria=hospedagem">Hospedagem de Sites</Link>
            <Link href="/blog?categoria=marketing-digital">
              Marketing Digital
            </Link>
            <Link href="/blog?categoria=produtos">Produtos</Link>
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      {destaque && (
        <section className="blog-featured">
          <div className="blog-container">
            <div className="section-heading">
              <span>EM DESTAQUE</span>
              <h2>Comece por aqui</h2>
            </div>

            <article className="featured-card">
              {destaque.image ? (
                <div className="featured-image">
                  <Image
                    src={destaque.image}
                    alt={destaque.title}
                    fill
                    priority
                    sizes="(max-width: 900px) 120vw, 55vw"
                    className="blog-image"
                  />
                </div>
              ) : (
                <div className="featured-image featured-placeholder">
                  <span>Clintin dos Sites</span>
                </div>
              )}

              <div className="featured-content">
                <span className="post-category">{destaque.category}</span>

                <h3>{destaque.title}</h3>

                <p>{destaque.description}</p>

                <div className="post-meta">
                  <span>📖 Leitura rápida</span>
                  <span>•</span>
                  <span>Clintin dos Sites</span>
                </div>

                <Link href={`/blog/${destaque.slug}`} className="cta-button">
                  Ler artigo
                  <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ARTIGOS RECENTES */}
      <section className="blog-posts">
        <div className="blog-container">
          <div className="section-heading posts-heading">
            <div>
              <span>CONTEÚDO RECENTE</span>
              <h2>Artigos recentes</h2>
            </div>

            <p>
              Conteúdos para você ficar por dentro no mundo do TI e do Marketing
              Digital.
            </p>
          </div>

          {recentes.length > 0 ? (
            <div className="posts-grid">
              {recentes.map(post => (
                <article key={post.slug} className="post-card">
                  <Link href={`/blog/${post.slug}`} className="post-image-link">
                    {post.image ? (
                      <div className="post-image">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          className="blog-image"
                        />
                      </div>
                    ) : (
                      <div className="post-image post-placeholder">
                        <span>Clintin dos Sites</span>
                      </div>
                    )}
                  </Link>

                  <div className="post-content">
                    <span className="post-category">{post.category}</span>

                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p>{post.description}</p>

                    <Link href={`/blog/${post.slug}`} className="post-link">
                      Ler artigo
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-blog">
              <p>Nenhum artigo publicado ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-course-cta">
        <div className="blog-container">
          <div className="course-cta-content">
            <span>QUER APRENDER A GANHAR DINHEIRO NA INTERNET?</span>

            <h2 className="title-purple">
              Aprenda Técnicas Avançadas para impulsionar vendas físicas e
              digitais.
            </h2>

            <p>
              Tenha acesso a um curso completo, ensinando como se posicionar
              corretemante na internet e técnicas avançadas para conseguir
              realizar vendas de serviços, produtos físicos e digitais apenas
              com seu celular ou computador com acesso a internet .
            </p>

            <a
              href="https://go.hotmart.com/H101021157N?ap=4b22"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mx-auto"
            >
              CONHECER O CURSO
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
