**<center>Nguồn:  Free Contest 06</center>**

Kì học này, do trường chuyên bị mất điện vào ngày kiểm tra học kì nên An được phép nhận đề bài tin học về nhà làm và nộp bài cho thầy giáo qua email. An được nhận đề bài vào thời điểm $A$ trong một ngày nào đó và phải nộp bài không muộn hơn thời điểm $B$ của một ngày nào đó biết rằng khoảng cách giữa hai thời điểm $A$ và $B$ ít nhất là một giây và nhiều nhất là một ngày.

An cần $t$ phút để hoàn thành bài thi. An có thể bắt đầu làm bài bất kì lúc nào kể từ khi nhận được đề. Trong trường hợp không làm kịp trong thời gian cho phép, An có thể xin thầy giáo cho làm bài thêm một giờ nữa và bị trừ một phần điểm. Nếu An không thể làm xong bài dù có thêm một giờ nữa thì cậu ấy sẽ phải thi lại.

Hãy xác định xem với khung thời gian và thời gian giải bài cho trước, An có thể hoàn thành bài thi, phải xin thêm một giờ hay phải thi lại.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n\ (1 ≤n ≤10000)$ là số lượng test. Sau đó là $n$ test.
- Mỗi test gồm một dòng duy nhất chứa hai thời điểm $A$ và $B$ theo định dạng `hh:mm:ss` và số nguyên $t\ (1 ≤t ≤2000)$. Dữ liệu đảm bảo $A$ và $B$ là hai thời điểm hợp lệ trong ngày (từ `00:00:00` đến `23:59:59`).

## Dữ liệu ra:
- Với mỗi test, nếu An có thể hoàn thành bài thi trong thời gian cho phép, ghi ra một dòng chứa từ `Perfect`. Nếu An cần xin thêm một giờ làm bài, ghi ra một dòng chứa từ `Extra`. Ngược lại, ghi ra một dòng chứa từ `Fail`.

## Ví dụ:
### Dữ liệu vào:
```
4
01:02:03 01:05:03 3
23:12:14 00:14:59 91
00:00:00 00:00:00 1000
01:00:00 05:00:00 666
```

### Dữ liệu ra:
```
Perfect
Extra
Perfect
Fail
```