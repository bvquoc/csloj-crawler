Như đã biết, giáo sư Y đã đầu tư các mảnh vườn trồng cây ăn quả để phục vụ cho các bữa tiệc mừng sau khi tổ chức các kỳ CSLPreVNOI, tuy nhiên, do đầu tư rất nhiều vườn cây nên quả thu hoạch dùng không hết, giáo sư có dự định bán cho các lái buôn hoa quả.

Giáo sư có ~n~ vườn cây được đánh số từ ~1~ đến ~n~. Giữa các vườn cây có ~n - 1~ con đường một chiều đánh số từ ~1~ đến ~n - 1~, con đường thứ ~i~ giáo sư sẽ thu số tiền ~c_i~ mỗi khi một lái buôn đi qua con đường này để đến các vườn cây mua quả, giữa hai vườn cây chỉ có không quá một con đường một chiều và có một vườn cây có thể đi đến được tất cả các vườn cây khác thông qua các con đường một chiều này. Có một số lái buôn đến xin mua quả từ các vườn cây của giáo sư. Lái buôn ~x~ được cho bởi hai số ~u~ là chỉ số vườn cây mà họ xuất hiện và ~P_x~ là số tiền mà họ sẽ bỏ ra để được mua quả ở một vườn cây nào đó (mới chỉ là phí đàm phán thôi). Vườn cây thứ ~v~ khi đến mùa thu hoạch được giáo sư định giá ~Q_v~ là số tiền mà lái buôn sẽ phải trả để mua (tất cả) quả ở vườn cây này. Như vậy, nếu lái buôn ~x~ đến ở vườn cây ~u~ mà muốn mua quả ở vườn cây ~v~ thì phải có đường đi từ ~u~ đến ~v~ và sẽ phải trả cho giáo sư số tiền là ~P_x+Q_v+\sum_{e}{c_e}~, trong đó ~\sum_{e}{c_e}~ là tổng chi phí phải trả trên con đường đi từ ~u~ đến ~v~.

**Lưu ý:** Mỗi lái buôn khi đến mua quả sẽ mua toàn bộ quả của đúng một mảnh vườn (tất nhiên phải có đường tới mảnh vườn đó) và mỗi một mảnh vườn cũng chỉ bán cho đúng một lái buôn (tất nhiên là chỉ khi được thu hoạch). Một đoạn đường có thể cho nhiều lái buôn đi qua.

Có ~q~ sự kiện xảy ra thuộc một trong hai loại:
+ ~1~ ~u~ ~v~: cho biết có một lái buôn đến mảnh vườn ~u~ và trả chi phí ~v~ để "đàm phán" mua quả ở một mảnh vườn
+ ~2~ ~u~ ~v~: cho biết có mảnh vườn ~u~ được thu hoạch với giá trị là ~v~

Giáo sư nhờ các bạn tính giúp: Sau mỗi sự kiện, nếu lựa chọn một cách hợp lý việc bán quả ở các mảnh vườn cho các lái buôn thì giáo sư thu được số tiền tối đa là bao nhiêu?
(Chú ý là không cần phải bán cho mọi lái buôn)

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~n~ và ~q~ là số mảnh vườn và số sự kiện xảy ra;
- ~n - 1~ dòng tiếp theo, dòng thứ ~i~ chứa ba số nguyên ~u_i, v_i, c_i~ cho biết có con đường một chiều đi từ mảnh vườn ~u_i~ tới mảnh vườn ~v_i~ với mức phí đi qua là ~c_i\ (1\le u_i, v_i \le n, u_i ≠ v_i, 0 \le c_i \le 1000)~;
- ~q~ dòng tiếp theo, mỗi dòng chứa ba số ~t, u, v~ mô tả một sự kiện ~(t ∈ \{1, 2\}, 1\le u \le n, 0 \le v \le 10^8)~.

## Dữ liệu ra:
- Ghi ra ~q~ dòng là kết quả sau mỗi sự kiện xảy ra (theo đúng thứ tự).

## Giới hạn:
Trong tất cả các test có ~n,q \le 10^5~, chi phí để đi qua các con đường là số nguyên dương không quá ~10^3~, phí đàm phán của các lái buôn và giá trị của các mảnh vườn là số nguyên dương không quá ~10^8~. Trong đó:

| Test #  | Điểm  |   ~n=~   |  ~q= ~   | Ràng buộc bổ sung |
| :-----: | :---: | :------: | :------: | :------: |
|    1    |   4   |   ~8~    |   ~8~    |    C2    |
|    2    |   4   |  ~300~   |  ~300~   |    C2     |
|    3,4    |   8   |  ~4 \times 10^3~   |  ~4 \times 10^3~   |    C2    |
| 5 ~ 10 |   24   | ~ 10^3 ~ | ~ 5 \times 10^4 ~ |    C1    |
| 11 ~ 13 |   12   | ~ 10^3 ~ | ~ 5 \times 10^4 ~ |    C2    |
| 14,15 |   8   |  ~10^5~  |  ~5 \times 10^4~  |    A1     |
| 16,17 |   8   |  ~10^5~  |  ~5 \times 10^4~  |    B1    |
| 18,19 |   8   |  ~10^5~  |  ~5 \times 10^4~  |    C1     |
| 20 ~ 24 |   20   |  ~10^5~  |  ~5 \times 10^4~  |    C2    |
| 25 |   4   |  ~10^5~  |  ~10^5~  |    C2    |

#### Ý nghĩa các ràng buộc bổ sung:

+ A: Con đường thứ ~i~ đi từ mảnh vườn thứ ~i~ đến mảnh vườn thứ ~i + 1~
+ B: con đường thứ ~i~ đi từ mảnh vườn thứ ~\lfloor \frac{i+1}{2} \rfloor~ đến mảnh vườn thứ ~i+1~
+ C: Không có ràng buộc thêm về cấu trúc các mảnh vườn và các con đường
+ 1: Tất cả các sự kiện loại ~1~ xảy ra sau các sự kiện loại ~2~
+ 2: Không có ràng buộc thêm về các sự kiện

## Ví dụ (Tải test đề bài và 2 test mẫu khác ở "Tệp đính kèm" phía trên đề bài):
#### Dữ liệu vào:
```
5 5
1 2 1
1 3 1
1 4 1
4 5 1
1 3 5
2 3 1
1 4 8
1 1 1
2 1 10
```

#### Dữ liệu ra:
```
0
6
6
6
17
```

#### Giải thích:
- Sau sự kiện thứ nhất: chưa có vườn cây nào được thu hoạch nên kết quả là ~0~
- Sau sự kiện thứ hai: Có một lái buôn ở vườn thứ ~3~ thu hoạch luôn vườn cây này (cách duy nhất), kết quả thu được là ~5 + 1=6~
- Sau sự kiện thứ ba và thứ tư có thêm hai lái buôn ở vườn cây số ~1~ và số ~4~ nhưng phương án tốt nhất vẫn là cho lái buôn ở vườn cây số ~3~ thu hoạch vườn cây thứ ~3~ nên kết quả vẫn là ~6~
- Sau sự kiện thứ năm: có ~2~ phương án:
    - Một là cho lái buôn ở vườn số ~1~ thu hoạch vườn số ~3~: số tiền thu được là ~10 + 1+1=12~
    - Hai là cho lái buôn ở vườn số ~1~ thu hoạch vườn số ~1~ và lái buôn ở vườn số ~3~ thu hoạch vườn số ~3~, số tiền thu được là: ~10+1+5+1=17~
Do đó: sau sự kiện thứ năm, kết quả là ~17~