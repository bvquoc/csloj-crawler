**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Cơ quan hàng không vũ trụ Mĩ NASA vừa thực hiện thành công một dự án lớn. Đó là xây dựng một trạm vũ trụ trên mặt trăng. Công việc trước mắt là duy trì trạm vũ trụ này trong $N$ ngày. Để vận hành tốt, lúc nào cũng cần có một phi hành gia ở trên trạm vũ trụ. Tuy nhiên, mỗi phi hành gia không thể ở trên trạm vũ trụ quá $M$ ngày liên tiếp, vì vậy NASA cần lập một kế hoạch luân phiên các nhà du hành vũ trụ. Chi phí cho việc luân phiên này cũng khác nhau đối với mỗi ngày và NASA muốn tối thiểu tổng chi phí này. Nhiệm vụ của bạn là đọc các thông tin và đưa ra một kế hoạch tối ưu. Chú ý rằng ở ngày thứ $1$ luôn cần có sự thay đổi.

## Dữ liệu vào:
- Dòng thứ nhất ghi hai số $N$ và $M\ (1 ≤ N ≤ 100000, 1 ≤ M ≤ 10000)$;
- Dòng thứ $i$ trong $N$ dòng sau ghi số $C_i$ chi phí cho việc thay đổi nhà du hành vũ trụ trong ngày thứ $i\ (0 ≤ C_i ≤ 10^5)$.

## Dữ liệu ra:
- Ghi ra một dòng duy nhất chứa số $S$ là chi phí tối thiểu cho việc duy trì trạm vũ trụ.

## Ví dụ:
### Dữ liệu vào:
```
9 3
1
1
1
5
1
5
2
1
1
```

## Dữ liệu ra:
```
4
```

**Giải thích:** Thay người ở các ngày thứ $1,3,5,8$.