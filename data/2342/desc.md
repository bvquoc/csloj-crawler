Cho một xâu kí tự ~s~, một xâu được gọi là xâu con của xâu ~s~ nếu như nó có thể được tạo thành bằng cách xoá đi một vài kí tự của xâu ~s~ và giữ nguyên thứ tự các kí tự còn lại. Ví dụ: `ant` là một xâu con của xâu `talent`.

Cho hai xâu ~S, T~ . Ta định nghĩa ~f(S, T )~ là độ dài của xâu ngắn nhất là xâu con của ~S~ nhưng không phải xâu con của ~T~ . Nếu không tồn tại xâu nào như thế thì ~f(S, T ) = −1~.

Ví dụ: ~f(xyzt, yztxx) = 2~ vì:
- Mọi xâu con độ dài không vượt quá ~1~ của `xyzt` đều là một xâu con của `yztxx`;
- Xâu con `xt` của `xyzt` có độ dài ~2~ và không phải là xâu con của `yztxx`.

Cho một số nguyên dương ~n~. Chúng ta chỉ quan tâm đến những xâu có độ dài ~2n~ với ~n~ kí tự ~0~ và ~n~ kí tự ~1~. Trong những xâu như thế hãy tìm ra ~2~ xâu ~S~ và ~T~ sao cho ~f(S, T )~ đạt giá trị lớn nhất.

## Dữ liệu vào:
- Chứa duy nhất một số nguyên dương ~n~.

## Dữ liệu ra:
- Dòng thứ nhất ứng với xâu ~S~;
- Dòng thứ hai ứng với xâu ~T~.

Nếu có nhiều cặp ~(S, T )~ thỏa mãn (tối ưu), in ra bất cứ cặp nào.

## Ví dụ:
#### Dữ liệu vào:
```
1
```

#### Dữ liệu ra:
```10
01
```
#### Giải thích:
- Nhận thấy hai xâu `10` và `01` có ~f(`10`, `01`) = 2~ vì mọi xâu con khác `10` của `10` đều là xâu con của `01`.

## Giới hạn:
- ~1 ≤ n ≤ 500~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)