**<center>NGUỒN: PreVNOI Ⅶ Lần 2 (ONLINE 2017)</center>**
<br>

Đất nước $X$ đang trong công cuộc kiến thiết hạ tầng giao thông. Có hai loại phương tiện được sử dụng nhiều nhất cần được quan tâm, đó là ô tô và máy bay. Cân bằng chi phí giữa xây dựng đường bộ và sân bay là một bài toán nan giải.

Có $N$ thành phố trong đất nước $X$. Chính phủ đã đề xuất $M$ đường bộ, con đường thứ $i$ sẽ nối giữa $2$ thành phố $u_i$ và $v_i$, có chi phí xây dựng là $w_i$. Để đảm bảo tính liên thông trong quốc gia cũng như quốc tế, chính phủ yêu cầu mỗi thành phố, hoặc phải xây dựng một sân bay trong thành phố, hoặc phải có thể di chuyển đến một thành phố có sân bay qua một hoặc nhiều con đường bộ.

Việc xây dựng sân bay được giải quyết bởi các nhà thầu. Mỗi nhà thầu có một khả năng xây dựng cũng như chi phí xây dựng sân bay khác nhau. Cụ thể, trong tổng cộng $C$ nhà thầu, nhà thầu thứ $i$ sẽ có thể xây tối đa $a_i$ sân bay, mỗi sân bay có chi phí xây dựng $b_i$.
Nhiệm vụ của bạn là, với mỗi nhà thầu, xác định chi phí xây dựng đường bộ và sân bay nhỏ nhất để thỏa mãn yêu cầu của chính phủ.


## Dữ liệu vào:
- Dòng đầu tiên gồm ba số $N, M \text{và }C$.
- $M$ dòng tiếp theo, mỗi dòng gồm ba số $u_i,v_i \text{và }w_i$ thể hiện một tuyến đường bộ.
- $C$ dòng tiếp theo, mỗi dòng gồm hai số $b_i$ và $a_i$ thể hiện thông tin của một nhà thầu.
***Lưu ý***: Đối với các bạn sử dụng ngôn ngữ C++, lượng dữ liệu nhập vào có thể rất lớn, các bạn nên sử dụng các phương pháp nhập nhanh (**printf, getchar,…**)

## Dữ liệu ra:
- In ra $C$ dòng, mỗi dòng gồm một số là chi phí xây dựng nhỏ nhất khi xét nhà thầu tương ứng. Nếu không thể thỏa mãn yêu cầu chính phủ, in $-1$.

## Giới hạn:
- $1 ≤ N ≤ 200000; 1 ≤ M ≤ 400000; 1 ≤ C ≤ 500000$;
- $1 ≤ w_i, b_i ≤ 10^9; 1 ≤ a_i ≤ N$;
- Trong $40\%$ số test có $C ≤ 100$.
- Trong $30\%$ số test tiếp theo có $M < N$ và luôn có cách đi giữa hai thành phố bất kì sử dụng đường bộ.

## Ví dụ
### Dữ liệu vào:
```
4 2 3
2 4 9
3 4 9
7 4
10 3
1 1
```

### Dữ liệu ra:
```
28
38
-1
```

## Giải thích:
- Nhà thầu $1$: Xây $4$ sân bay, tổng chi phí là $28$.
- Nhà thầu $2$: Xây $2$ đường bộ và $2$ sân bay ở $1$ và $4$, tổng chi phí là $9+9+2×10 = 38$.
- Nhà thầu $3$: Không thể thỏa mãn yêu cầu chỉ với $1$ sân bay.