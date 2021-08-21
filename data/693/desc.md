Cây là một cấu trúc dữ liệu quen thuộc trong tin học. Ví dụ ta có cây với ~16~ nút như hình bên dưới.

<center><img src="/images/problems/693/ANCES.png" width="400px" /></center>

Các nút được đánh số từ ~1~ đến ~16~. Nút ~8~ là gốc. Nút ~x~ được gọi là nút cha của ~y~, nếu tồn tại một đường dẫn từ gốc tới ~y~ đi qua ~x~. Ví dụ, nút ~4~ là nút cha của nút ~16~, nút ~10~ cũng là nút cha của ~16~. Một nút đồng thời là nút cha của chính mình. Như vậy, các nút ~8~, ~4~, ~10~ và ~16~ là nút cha của ~16~. Nút ~x~ được gọi là nút cha chung của hai nút khác nhau ~y~ và ~z~, nếu nó vừa là nút cha của ~y~, vừa là nút cha của ~z~. Ví dụ, các nút ~8~ và ~4~ đều là nút cha chung của các nút ~7~ và ~16~. Nút ~x~ được gọi là nút cha chung gần nhất của ~y~ và ~z~, nếu nó là nút cha chung của hai nút này và trên đường dẫn từ ~x~ tới ~y~ không còn nút cha chung nào khác của ~y~ và ~z~. Ở cây đang xét, ~4~ là nút cha chung gần nhất của ~7~ và ~16~.

Hãy lập trình tìm nút cha chung gần nhất của hai nút khác nhau của một cây có ~N~ nút, các nút được đánh số từ ~1~ tới ~N~.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~N, K~- trong đó ~N~ - số nút của cây, ~2 ≤ N ≤ 10000~, ~K~ là nút gốc;
- ~N-1~ dòng còn lại, mỗi dòng chứa hai số nguyên cho biết hai nút liên tiếp của cây;
- Dòng cuối cùng chứa hai số nguyên khác nhau là hai nút cần tìm nút cha chung gần nhất.

## Dữ liệu ra:
- Một số nguyên – nút cha chung gần nhất.

## Ví dụ
#### Dữ liệu vào:
```
16 8
1 14
8 5
10 16
5 9
4 6
8 4
4 10
1 13
6 15
10 11
6 7
10 2
16 3
8 1
16 12
16 7
```

#### Dữ liệu ra:
```
4
```