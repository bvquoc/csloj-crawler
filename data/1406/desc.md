**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Khủng long kỳ thực không hề hung dữ như người ta vẫn tưởng, chúng rất thông minh và dễ bảo. Bạn là người trông giữ khủng long và có nhiệm vụ sắp xếp lại khủng long trong chuồng. Chuồng chỉ có một cửa ra vào, và chiều ngang hẹp chỉ vừa đủ cho một con khủng long di chuyển, vì thế con nào vào chuồng trước thì sẽ phải ra sau. Ở cạnh chuồng có một hành lang. Hành lang có một cửa vào và một cửa ra, và chiều ngang cũng vừa đủ cho một con khủng long di chuyển, nên con nào vào trước sẽ phải ra trước.

Có ~n~ con khủng long, tất cả đều đang ở trong chuồng. Con khủng long thứ ~i~ (tính từ cửa chuồng vào trong) có số hiệu ~p_i\ (p_1, p_2, …, p_n~ là một hoán vị của ~\{1, 2, …, n\})~. Để sắp xếp lại các con khủng long, bạn sẽ sử dụng đèn báo hiệu được lắp ở chuồng và hành lang. Khi bật đèn báo hiệu ở chuồng, nếu trong chuồng có khủng long thì một con khủng long trong chuồng sẽ đi sang hành lang. Khi bật đèn báo hiệu ở hành lang, nếu ở hành lang có khủng long thì một con khủng long ở hành lang sẽ đi vào chuồng.

**Yêu cầu:** Hãy chỉ ra một dãy không quá ~10^6~ báo hiệu để sắp xếp lại các con khủng long theo thứ tự từ nhỏ đến lớn tính từ cửa chuồng vào trong.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~;
- Dòng tiếp theo chứa ~n~ số nguyên dương ~p_1, p_2, …, p_n~.

## Dữ liệu ra:
- Ghi xâu ~s\ (0 ≤ |s| ≤ 10^6)~ gồm nhiều ký tự viết liền nhau, các ký tự ~'C'~ cho biết bạn bật đèn ở chuồng, các ký tự ~'H'~ cho biết bạn bật đèn ở hành lang. Lưu ý các đèn là đèn báo hiệu và sẽ tắt ngay sau khi được bật sáng. Các đèn được bật theo đúng trình tự trong xâu ~s~.

## Ví dụ:
#### Dữ liệu vào:
```
4
3 1 4 2
```

#### Dữ liệu ra:
```
CCHHCCCCHHHHCCHHCCHCCHCCHHHH
```

## Giới hạn:
- Subtask ~\#1: n ≤ 50~;
- Subtask ~\#2: n ≤ 1000~;
- Subtask ~\#3: n ≤ 20000~.