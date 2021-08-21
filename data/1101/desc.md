**<center>NGUỒN: PreVNOI Ⅷ (BẮC NINH 2018)</center>**
<br>

Múa Lân là một tiết mục trong lễ hội ăn mừng đội tuyển **Việt Nam** vô địch **AFF Cup 2018**. Khi chơi múa lân, hai người trong lốt của một con lân sẽ biểu diễn những tiết mục nhào lộn thăng bằng rất hấp dẫn. Người đứng trước đứng thẳng giữ đầu lân và hai chân có vai trò như hai chân trước của con lân. Người đứng sau cúi xuống lưng người thứ nhất và hai chân có vai trò như hai chân sau của con lân.

Có hai dãy cột, mỗi dãy xếp hàng dọc và đánh số từ ~1~ tới ~n~, ký hiệu là dãy ~L~ và dãy ~R~. Cột thứ ~i~ của dãy ~L~ và cột thứ ~i~ của dãy ~R~ gọi là ngang hàng nhau. Trong quá trình biểu diễn, chân trái (trước và sau) của con lân chỉ đặt lên cột ở dãy ~L~ còn chân phải của nó chỉ đặt lên cột ở dãy ~R~. Mỗi khi đặt chân, hai chân trước luôn đặt ở hai cột ngang hàng và cũng như vậy, hai chân sau cũng luôn phải đặt ở hai cột ngang hàng.

Ban đầu con lân đứng bằng hai chân sau: chân trái ở cột số ~1~ dãy ~L~ và chân phải ở cột số ~1~ dãy ~R~ (để thực hiện động tác này người đứng sau phải nâng người đứng trước lên), sau đó con lân đặt hai chân trước lên cột ~2~ của mỗi dãy. Tiếp theo, con lân sẽ lần lượt nhảy qua dãy cột: mỗi bước nhảy, hai chân trước nhảy sang cặp cột ngang hàng kế tiếp cặp cột đang đứng và hai chân sau nhảy vào vị trí hai chân trước vừa đứng. Để tiết mục biểu diễn được an toàn, dãy các cột phải thỏa mãn hai điều kiện sau:
- Hai cột ở hai vị trí ngang hàng trên hai dãy phải có chiều cao bằng nhau

- Chênh lệnh độ cao giữa hai cột liên tiếp trong dãy ~L~ cũng như chênh lệch độ cao giữa hai cột liên tiếp trong dãy ~R~ không được vượt quá ~Δ~

Bạn cần kiểm tra nếu dãy cột không tuân thủ quy tắc trên, bạn cần loại bỏ một số ít nhất các cột và dồn các cột còn lại trong mỗi dãy giữ nguyên thứ tự để được hai dãy cột thỏa mãn điều kiện cho buổi diễn. Cho biết độ cao của các cột trong dãy ~L~ sau khi thực hiện công việc (dĩ nhiên đây cũng là độ cao của các cột trong dãy ~R~). Nếu có nhiều phương án tối ưu, chỉ ra phương án có dãy độ cao của các cột mang thứ tự từ điển lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n≤4000~ và số nguyên dương ~Δ≤10^9~
- Dòng thứ hai chứa ~n~ số nguyên dương, số thứ ~i\ (≤10^9)~ là độ cao cột thứ ~i~ của dãy ~L~
- Dòng thứ ba chứa ~n~ số nguyên dương, số thứ ~i\ (≤10^9)~ là độ cao cột thứ ~i~ của dãy ~R~

## Dữ liệu ra:
- Dòng đầu ghi số nguyên ~m~ là số lượng cột còn lại trên mỗi dãy
- Dòng thứ hai ghi ~m~ số nguyên là độ cao của mỗi một cột trong dãy ~L~, các số phải được liệt kê theo thứ tự từ chiều cao cột đầu tiên đến chiều cao cột cuối cùng
Các số trên một dòng được ghi cách nhau bởi dấu cách

## Giới hạn:
- ~20\%~ số điểm ứng với các test có ~n≤20~
- ~30\%~ số điểm ứng với các test khác có ~n≤100~
- ~50\%~ số điểm ứng với các test khác không có ràng buộc bổ sung

## Ví dụ:
#### Dữ liệu vào:
```
8 3
2 1 2 3 9 4 5 7
2 3 2 1 7 4 5 9
```

#### Dữ liệu ra:
```
4
2 3 4 5
```

#### Giải thích:
- Trên mỗi dãy có thể giữ lại ~4~ cột. Có nhiều phương án giữ lại số cột nhiều nhất với chiều cao của các cột là: ~(2,1,4,5);(2,2,4,5);(2,3,4,5)~ trong đó phương án ~(2,3,4,5)~ có thứ tự từ điển lớn nhất.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)