def params_parser(func):
    """
    参数解析
    :param func:
    :return:
    """

    @functools.wraps(func)
    def parse_params_wrapper(request, *args, **kwargs):

        logger.debug("params_parser request: %s, args: %s, kwargs: %s", request, args, kwargs)

        task_page_user = request.session.get('task_page_user', '')
        if not task_page_user:
            return jsonify(ret=-1, error='param error')

        session_uid = task_page_user.get('uid', 0)
        try:
            param_uid = request.REQUEST.get('uid')

            # 客户端给的service_uid. 有使用字符串类型，也有整型
            if param_uid and not isinstance(param_uid, int):
                if not param_uid.isdigit():
                    logger.error('invalid request.REQUEST: %s', request.REQUEST)
                    return jsonify(ret=-1, error='param error')

            param_uid = int(param_uid)
        except Exception as e:
            logger.error("invalid request post data: %s, e: %s ", request.REQUEST, e)
            param_uid = 0

        if not param_uid:
            return jsonify(ret=-1, error='param error')

        if int(session_uid) != int(param_uid):
            return jsonify(ret=-1, error='param error')

        request.p = ObjectDict()
        request.p.uid = param_uid
        request.p.client_ip = get_client_ip(request)
        request.p.access_token = request.REQUEST.get('access_token')
        logger.debug("request.p: %s", request.p)

        return func(request, *args, **kwargs)

    return parse_params_wrapper


def check_params(func):
    """
    token校验
    :param func:
    :return:
    """

    @functools.wraps(func)
    def check_params_wrapper(request,  *args, **kwargs):

        logger.debug("check_params request: %s", request)

        task_page_user = request.session.get('task_page_user', '')
        if not task_page_user:
            return jsonify(ret=-1, error='param error')

        # 检测token
        user_token = TaskPageUserAccessToken(request.p.uid)
        cache_token = user_token.get_token()

        if cache_token != request.p.access_token and user_token.DEFAULT_TOKEN != request.p.access_token:
            logger.error("error token: %s", request.p.access_token)
            return jsonify(ret=-1, error='param error')

        # 判断login_user状态
        uid = task_page_user.get('uid', 0)
        if uid != int(request.p.uid):
            return jsonify(ret=-1, error='param error')

        # 自动续期
        user_token.set_token(cache_token)

        return func(request, *args, **kwargs)

    return check_params_wrapper









def params_parser(func):
    """
    参数解析
    :param func:
    :return:
    """

    @functools.wraps(func)
    def parse_params_wrapper(request, *args, **kwargs):

        logger.debug("params_parser request: %s, args: %s, kwargs: %s", request, args, kwargs)

        # TODO 先关闭，上线前打开
        # task_page_user = request.session.get('task_page_user', '')
        # if not task_page_user:
        #     return jsonify(ret=-1, error='param error')
        #
        # session_uid = task_page_user.get('uid', 0)
        # try:
        #     param_uid = request.REQUEST.get('uid')
        #
        #     # 客户端给的service_uid. 有使用字符串类型，也有整型
        #     if param_uid and not isinstance(param_uid, int):
        #         if not param_uid.isdigit():
        #             logger.error('invalid request.REQUEST: %s', request.REQUEST)
        #             return jsonify(ret=-1, error='param error')
        #
        #     param_uid = int(param_uid)
        # except Exception as e:
        #     logger.error("invalid request post data: %s, e: %s ", request.REQUEST, e)
        #     param_uid = 0
        #
        # if not param_uid:
        #     return jsonify(ret=-1, error='param error')
        #
        # if int(session_uid) != int(param_uid):
        #     return jsonify(ret=-1, error='param error')

        request.p = ObjectDict()
        # request.p.uid = param_uid
        request.p.uid = request.REQUEST.get('uid')  # TODO 先关闭，上线前打开
        request.p.client_ip = get_client_ip(request)
        request.p.access_token = request.REQUEST.get('access_token')
        logger.debug("request.p: %s", request.p)

        return func(request, *args, **kwargs)

    return parse_params_wrapper


def check_params(func):
    """
    token校验
    :param func:
    :return:
    """

    @functools.wraps(func)
    def check_params_wrapper(request,  *args, **kwargs):

        logger.debug("check_params request: %s", request)

        # TODO 先关闭，上线前打开
        # task_page_user = request.session.get('task_page_user', '')
        # if not task_page_user:
        #     return jsonify(ret=-1, error='param error')
        #
        # # 检测token
        # user_token = TaskPageUserAccessToken(request.p.uid)
        # cache_token = user_token.get_token()
        #
        # if cache_token != request.p.access_token and user_token.DEFAULT_TOKEN != request.p.access_token:
        #     logger.error("error token: %s", request.p.access_token)
        #     return jsonify(ret=-1, error='param error')
        #
        # # 判断login_user状态
        # uid = task_page_user.get('uid', 0)
        # if uid != int(request.p.uid):
        #     return jsonify(ret=-1, error='param error')
        #
        # # 自动续期
        # user_token.set_token(cache_token)

        return func(request, *args, **kwargs)

    return check_params_wrapper
