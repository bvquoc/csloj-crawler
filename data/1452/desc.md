<!--**<center>NGUỒN: ĐỀ THI THỬ VOI 2015 3HB (Hải phòng - Hải Dương - Hưng Yên - Bắc Giang)</center>**-->

Một dãy ~a_1,a_2,…,a_n~ được gọi là dãy superseq độ dài ~n~ nếu như:

~~\left\{ \begin{array}{l}
{a_1} = 0\\
{a_n} = H\\
\left| {{a_i} - {a_{i + 1}}} \right| \le K,\forall i = 1,2, \dots ,n - 1\\
0 \le {a_i} \le H,\forall i = 1,2, \dots ,n
\end{array} \right.~~

**Yêu cầu:** Với ~n,H,K~ cho trước, hãy đếm số lượng dãy superseq theo modulo ~666013~.

## Dữ liệu vào:
- Một dòng duy nhất chứa ba số nguyên ~n,H,K\ (1≤n≤10^9;1≤H≤100,1≤K≤H)~.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lượng dãy superseq theo modulo ~666013~.

## Ví dụ:
#### Dữ liệu vào:
```
4 3 2
```

#### Dữ liệu ra:
```
8
```

#### Giải thích:
- Có ~8~ dãy là: ~\{0, 0, 1, 3\}, \{0, 2, 3, 3\}, \{0, 1, 2, 3\}, \{0, 1, 3, 3\}, \{0, 2, 1, 3\}, \{0, 0, 2, 3\}, \{0, 1, 1, 3\}, \{0, 2, 2, 3\}~.

## Giới hạn:
- ~30\%~ số điểm tương ứng với ~N≤20000,H≤20~;
- ~20\%~ số điểm tiếp theo tương ứng với ~N≤5× 10^5,H≤30~;
- ~30\%~ số điểm tiếp theo tương ứng với ~H≤30~;
- ~20\%~ số điểm còn lại không có ràng buộc bổ sung.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)