import styles from "./index.module.css";
import NewProjectCard from "@/components/molecules/new-project-card";
import ProjectCard from "@/components/molecules/project-card";
import ProjectsSearch from "@/components/organisms/projects-search";
import WithHeroTemplate from "@/components/templates/with-hero";

export default function Projects() {
	return (
		<WithHeroTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				<NewProjectCard />
				{makeProjectCardProps().map(({ id, ...props }) => (
					<ProjectCard key={id} {...props} />
				))}
			</section>
		</WithHeroTemplate>
	);
}

function makeProjectCardProps() {
	return _getProjects().map((p) => {
		return {
			id: p.id,
			title: p.title,
			tags: p.tags,
			startsAt: p.starts_at,
			endsAt: p.ends_at,
			tagMaster: _getTags(),
		};
	});

	function _getProjects() {
		return [
			{
				id: 1,
				title: "サンプルプロジェクト１",
				tags: ["1"],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 2,
				title: "サンプルプロジェクト１",
				tags: ["2"],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 3,
				title: "サンプルプロジェクト２",
				tags: ["3"],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 4,
				title: "サンプルプロジェクト３",
				tags: ["4"],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 5,
				title: "サンプルプロジェクト４",
				tags: ["5"],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 6,
				title: "サンプルプロジェクト５",
				tags: ["6"],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
		];
	}

	function _getTags() {
		return [
			{ id: "1", title: "サンプルタグ１" },
			{ id: "2", title: "サンプルタグ２" },
			{ id: "3", title: "サンプルタグ３" },
			{ id: "4", title: "サンプルタグ４" },
			{ id: "5", title: "サンプルタグ５" },
			{ id: "6", title: "サンプルタグ６" },
		];
	}
}
