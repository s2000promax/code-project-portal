import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/uiKit/Text';
import { Icon } from '@/shared/uiKit/Icon/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/uiKit/Card';
import { Avatar } from '@/shared/uiKit/Avatar/ui/Avatar';
import { Button, VariantButton } from '@/shared/uiKit/Button';
import { AppLink } from '@/shared/uiKit/AppLink/ui/AppLink';
import cls from './ArticleListItem.module.scss';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/route';
import { AppImage } from '@/shared/uiKit/AppImage';
import { Skeleton } from '@/shared/uiKit/Skeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = (
    <Text
      text={article.type.join(', ')}
      className={cls.types}
    />
  );
  const views = (
    <>
      <Text
        text={String(article.views)}
        className={cls.views}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text
              text={article.user.username}
              className={cls.username}
            />
            <Text
              text={article.createdAt}
              className={cls.date}
            />
          </div>
          <Text
            title={article.title}
            className={cls.title}
          />
          {types}
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            fallback={
              <Skeleton
                width="100%"
                height={250}
              />
            }
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button variant={VariantButton.OUTLINE}>
                {t('Read more...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            alt={article.title}
            src={article.img}
            className={cls.img}
            fallback={
              <Skeleton
                width={200}
                height={200}
              />
            }
          />
          <Text
            text={article.createdAt}
            className={cls.date}
          />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
          text={article.title}
          className={cls.title}
        />
      </Card>
    </AppLink>
  );
});
